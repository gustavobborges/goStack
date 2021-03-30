import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {

  const user = createUser({
    name: 'Gustavo',
    email: 'gustavo@gmail.com',
    password: '123',
    techs: [
      'NodeJS',
      'React',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ]
  });

  console.log(user.email)

  return response.json({ message: 'Hello World' });
}