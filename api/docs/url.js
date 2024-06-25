// src/api/docs/url.js

/**
 * @swagger
 * tags:
 *   name: URLs
 *   description: URL management endpoints
 */

/**
 * @swagger
 * /api/URL:
 *   post:
 *     summary: Create a shortened URL
 *     tags: [URLs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               longUrl:
 *                 type: string
 *                 description: The original long URL
 *     responses:
 *       201:
 *         description: The shortened URL was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fullShortUrl:
 *                   type: string
 *                   description: The shortened URL
 *                 longUrl:
 *                   type: string
 *                   description: The original long URL
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StatusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: An error occurred
 */

/**
 * @swagger
 * /api/URL/{shortUrl}:
 *   get:
 *     summary: Redirect to the original long URL
 *     tags: [URLs]
 *     parameters:
 *       - in: path
 *         name: shortUrl
 *         schema:
 *           type: string
 *         required: true
 *         description: The shortened URL
 *     responses:
 *       302:
 *         description: Redirect to the original URL
 *       404:
 *         description: URL not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StatusCode:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: URL not found
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StatusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: An error occurred
 */
