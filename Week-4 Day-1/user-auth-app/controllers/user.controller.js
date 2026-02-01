import bcrypt from 'bcrypt';
import { supabase } from '../supabaseClient.js';

export const signupUser = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // Basic validation
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const { error } = await supabase.from('users').insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword
      }
    ]);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(201).json({
      message: 'User registered successfully'
    });

  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: 'Name query is required' });
    }

    const { data: user, error } = await supabase
      .from('users')
      .select('id, name, email, age, location')
      .eq('name', name)
      .single();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
};
