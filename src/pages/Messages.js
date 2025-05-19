import React, { useState } from 'react';

const mockMessages = [
    {
        id: 1,
        sender: 'User A',
        content: 'Hi, I need help with my order.',
        time: '10:30 AM',
    },
    {
        id: 2,
        sender: 'User B',
        content: 'When will my package arrive?',
        time: '11:15 AM',
    },
    {
        id: 3,
        sender: 'User C',
        content: 'Please update the tracking link.',
        time: '1:00 PM',
    },
];

const Messages = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    return (
        <div className="container mt-5">
            <h4 className="mb-4 text-primary fw-semibold">📨 Messages</h4>
            <div className="row">
                {/* Message List */}
                <div className="col-md-4 mb-3">
                    <div className="border rounded shadow-sm p-2" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <ul className="list-group">
                            {mockMessages.map((msg) => (
                                <li
                                    key={msg.id}
                                    className={`list-group-item list-group-item-action 
                                        ${selectedMessage?.id === msg.id ? 'active text-white bg-primary' : ''}`}
                                    onClick={() => setSelectedMessage(msg)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex justify-content-between">
                                        <strong>{msg.sender}</strong>
                                        <small>{msg.time}</small>
                                    </div>
                                    <small className="text-muted">{msg.content.slice(0, 40)}...</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Message Viewer */}
                <div className="col-md-8">
                    {selectedMessage ? (
                        <div className="card shadow p-4 border-0">
                            <div className="mb-3">
                                <h5 className="text-secondary">From: <span className="text-dark">{selectedMessage.sender}</span></h5>
                                <p><strong className="text-muted">Time:</strong> {selectedMessage.time}</p>
                                <hr />
                            </div>
                            <p className="lead">{selectedMessage.content}</p>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                            <p>Select a message to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;
