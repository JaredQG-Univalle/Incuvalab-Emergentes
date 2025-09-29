// create_admin.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './modules/user/model.js';

dotenv.config();

async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const passwordHash = await bcrypt.hash('admin1236', 10);  // tu contraseña real
        const user = new User({
            name: 'ADMINISTRADOR',
            username: 'admin1236',
            email: 'admin@admin.com',
            password: passwordHash,
            groups: [],
            permissions: [],
            is_admin: true,
            is_active: true,
            photo_url: [],
            last_login: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await user.save();
        console.log('✅ Usuario administrador creado correctamente.');
    } catch (error) {
        console.error('❌ Error creando el administrador:', error);
    } finally {
        await mongoose.disconnect();
    }
}

createAdmin();
