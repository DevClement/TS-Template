import { Router } from 'express';
import home from './homeRoute';

// guaranteed to get dependencies
export default () => {
	const app = Router();

	home(app);

	return app
}