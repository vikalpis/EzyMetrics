import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const initialLeads = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New', source: 'Website' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted', source: 'Referral' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Qualified', source: 'LinkedIn' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'New', source: 'Google Ads' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', status: 'Contacted', source: 'Facebook' },
];

function Leads() {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id, newStatus) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Leads</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Lead Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Input 
            placeholder="Search leads..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.status}</TableCell>
                  <TableCell>{lead.source}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedLead(lead)}>View Details</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Lead Details</DialogTitle>
                        </DialogHeader>
                        {selectedLead && (
                          <div className="mt-4">
                            <p><strong>Name:</strong> {selectedLead.name}</p>
                            <p><strong>Email:</strong> {selectedLead.email}</p>
                            <p><strong>Status:</strong> {selectedLead.status}</p>
                            <p><strong>Source:</strong> {selectedLead.source}</p>
                            <div className="mt-4">
                              <p><strong>Change Status:</strong></p>
                              <div className="flex space-x-2 mt-2">
                                {['New', 'Contacted', 'Qualified', 'Lost'].map((status) => (
                                  <Button
                                    key={status}
                                    variant={selectedLead.status === status ? 'default' : 'outline'}
                                    onClick={() => handleStatusChange(selectedLead.id, status)}
                                  >
                                    {status}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Leads;