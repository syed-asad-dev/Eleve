const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders — save new order
router.post('/', async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      address,
      city,
      specialInstructions,
      items,
      totalAmount,
      orderReference,
    } = req.body;

    const order = new Order({
      customerName,
      phone,
      email,
      address,
      city,
      specialInstructions,
      items,
      totalAmount,
      orderReference,
    });

    const savedOrder = await order.save();
    res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ success: false, message: 'Failed to place order', error: error.message });
  }
});

// GET /api/orders — get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch orders', error: error.message });
  }
});

module.exports = router;
