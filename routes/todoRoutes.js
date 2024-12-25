const express = require('express');
const db = require('../db/database');
const router = express.Router();

// Create TODO
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const sql = 'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)';
  const params = [title, description || '', false];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to create todo' });
    }
    res.status(201).json({ id: this.lastID, title, description, completed: false });
  });
});

// Get all TODOs
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM todos';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to fetch todos' });
    }
    res.status(200).json(rows);
  });
});

// Update TODO
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const sql = 'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?';
  const params = [title, description, completed, id];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to update todo' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ id, title, description, completed });
  });
});

// Delete TODO
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM todos WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to delete todo' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).send();
  });
});

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the TODO
 *         title:
 *           type: string
 *           description: The title of the TODO
 *         description:
 *           type: string
 *           description: The description of the TODO
 *         completed:
 *           type: boolean
 *           description: The status of the TODO
 *       example:
 *         id: 1
 *         title: Learn Swagger
 *         description: Implement Swagger for API documentation
 *         completed: false
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Returns a list of all TODOs
 *     responses:
 *       200:
 *         description: The list of TODOs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Creates a new TODO
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: The TODO was successfully created
 */

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Updates an existing TODO
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The TODO ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The TODO was successfully updated
 *       404:
 *         description: The TODO was not found
 */

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Deletes a TODO
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The TODO ID
 *     responses:
 *       204:
 *         description: The TODO was successfully deleted
 *       404:
 *         description: The TODO was not found
 */
