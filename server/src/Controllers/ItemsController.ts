import {Request, Response} from 'express';
import knex from '../Database/connection';

class ItemsController {

    async index(req: Request, res: Response){
        const items = await knex('items').select('*');
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.43.47:3333/uploads/${item.image}`,
            };
        });
        return res.json(serializedItems);
    }

}


export default ItemsController;