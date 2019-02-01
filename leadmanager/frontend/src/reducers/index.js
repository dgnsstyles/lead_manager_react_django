import { combineReducers} from "redux";
import leads from "./leads";
import errors from './errors';
import messages from './messages';
import auth from './Auth';

export default combineReducers({
    leads,
    errors,
    messages,
    auth
});