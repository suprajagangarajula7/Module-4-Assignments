import supabase from "../config/supabaseClient.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, age, role } = req.body;

    //check duplicate email
    const { data: existingUser } = await supabase
      .from("userss")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("userss").insert([
      { name, email, password: hashedPassword, age, role }
    ]);

    if (error) throw error;

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("userss")
      .select("id, name, email, age, role, created_at");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("userss")
      .select("id, name, email, age, role")
      .eq("id", id)
      .single();

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("userss")
      .update(req.body)
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "User updated successfully" });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("userss")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};
