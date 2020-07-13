import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
import swaggerDocs from './docs';
import swaggerUI from 'swagger-ui-express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import './config/passport';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
app.use('/files', express.static('files'));
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get('/', (req, res) => res.redirect('/api/docs'));
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const error = Object.keys(err).length ? err : { message: 'Error...' };
  res.status(err.status || 500).json(error)
});

export default app;
