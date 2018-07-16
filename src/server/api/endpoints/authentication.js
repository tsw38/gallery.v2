import {
  ObjectUtil
} from '../../../shared/utils';
import jwt from 'jsonwebtoken';

export default async (req,res,next) => {
  jwt.verify(req.token, process.env.KEY, (err, data) => {
    if(err){
      console.log('what is going on');
      res.redirect('/');
    } else {
      res.json({
        text: 'I AM PROTECTED'
      });
    }
  });
}
