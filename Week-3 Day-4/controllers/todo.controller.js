import { supabase } from "../db.js";

export const addTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId)
    return res.status(400).json({ message: "Missing fields" });


  const { error } = await supabase.from("todoss").insert([
    { title, description, user_id: userId }
  ]);

  if (error) return res.status(400).json(error);

  res.json({ message: "Todo added" });
};

export const getTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("todoss")
    .select("*")
    .eq("user_id", userId);

  if (error) return res.status(400).json(error);

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { title, description, is_completed } = req.body;


  const { error } = await supabase
    .from("todoss")
    .update({ title, description, is_completed })
    .eq("id", todoId);

  if (error) return res.status(400).json(error);

  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase.from("todoss").delete().eq("id", todoId);

  if (error) return res.status(400).json(error);

  res.json({ message: "Todo deleted" });
};
