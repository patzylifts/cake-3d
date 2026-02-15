import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

const initialOrders = [
    { id: 1, name: "John Doe", order: "Chocolate Cake", status: "Pending" },
    { id: 2, name: "Jane Smith", order: "Vanilla Cake", status: "Completed" },
    { id: 3, name: "Alice Johnson", order: "Red Velvet Cake", status: "In Progress" },
];

const AdminPage = () => {
    const [orders, setOrders] = useState(initialOrders);
    const [editingOrder, setEditingOrder] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (order) => {
        setEditingOrder(order);
        setIsEditing(true);
    };

    const handleSave = () => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === editingOrder.id ? editingOrder : order
            )
        );
        setIsEditing(false);
    };

    const handleDelete = (id) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Admin Panel</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Order</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.name}</TableCell>
                                <TableCell>{order.order}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEdit(order)}
                                        style={{ marginRight: "10px" }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(order.id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Диалог редактирования */}
            {isEditing && (
                <Dialog open={isEditing} onClose={() => setIsEditing(false)}>
                    <DialogTitle>Edit Order</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Customer Name"
                            fullWidth
                            value={editingOrder.name}
                            onChange={(e) =>
                                setEditingOrder({ ...editingOrder, name: e.target.value })
                            }
                            margin="dense"
                        />
                        <TextField
                            label="Order"
                            fullWidth
                            value={editingOrder.order}
                            onChange={(e) =>
                                setEditingOrder({ ...editingOrder, order: e.target.value })
                            }
                            margin="dense"
                        />
                        <TextField
                            label="Status"
                            fullWidth
                            value={editingOrder.status}
                            onChange={(e) =>
                                setEditingOrder({ ...editingOrder, status: e.target.value })
                            }
                            margin="dense"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsEditing(false)} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default AdminPage;
