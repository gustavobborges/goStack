import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticaded from '../middlewares/enruseAuthenticaded';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticaded);

appointmentsRouter.get('/', async (request, response) => {
  console.log(request.user);
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});
 
appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider_id, date } = request.body;

        const parsedDate = parseISO(date);
      
        const createAppointment = new CreateAppointmentService();
      
        const appointment = await createAppointment.execute({
          date: parsedDate,
          provider_id,
        });
      
        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error:err.message });
    }
});

export default appointmentsRouter;