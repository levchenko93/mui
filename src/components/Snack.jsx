import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function Snack({ isOpen, handleClose = Function.prototype }) {
   return (
      <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
         <Alert severity="success">Product add to basket!</Alert>
      </Snackbar>
   );
}

export default Snack;
