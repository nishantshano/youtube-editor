import { Request, Response } from 'express';

export const getExample = (req: Request, res: Response) => {
  res.json({ message: 'Hello from Example App!' });
};

export const createExample = (req: Request, res: Response) => {
  const { name, description } = req.body;
  res.json({ 
    message: 'Example created successfully',
    data: { name, description }
  });
};

export const getExampleById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ 
    message: 'Example retrieved',
    data: { id, name: 'Example Item', description: 'This is an example item' }
  });
};

export const updateExample = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  res.json({ 
    message: 'Example updated successfully',
    data: { id, name, description }
  });
};

export const deleteExample = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ 
    message: 'Example deleted successfully',
    data: { id }
  });
};
