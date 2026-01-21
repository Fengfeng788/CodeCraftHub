const request = require('supertest');
const app = require('../app');
const User = require('../models/userModel');
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Management', () => {
    it('should register a new user', async () => {
        const response = await request(app).post('/api/users/register').send({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'password123'
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('userId');
    });

    it('should login an existing user', async () => {
        const response = await request(app).post('/api/users/login').send({
            email: 'testuser@example.com',
            password: 'password123'
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should get user profile', async () => {
        const loginResponse = await request(app).post('/api/users/login').send({
            email: 'testuser@example.com',
            password: 'password123'
        });

        const token = loginResponse.body.token;

        const profileResponse = await request(app).get('/api/users/profile').set('Authorization', `Bearer ${token}`);
        expect(profileResponse.status).toBe(200);
        expect(profileResponse.body).toHaveProperty('username');
    });
});