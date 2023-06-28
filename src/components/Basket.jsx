import { ShoppingBasket } from '@mui/icons-material';
import {
   Divider,
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Typography,
} from '@mui/material';
import BasketItem from './BasketItem';

function Basket({
   order = [],
   removeFromOrder,
   cartOpen,
   closeCart = Function.prototype,
}) {
   return (
      <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
         <List sx={{ width: '400px' }}>
            <ListItem>
               <ListItemIcon>
                  <ShoppingBasket />
               </ListItemIcon>
               <ListItemText primary="Basket" />
            </ListItem>
            <Divider />
            {!order.length ? (
               <ListItem>Basket is empty</ListItem>
            ) : (
               <>
                  {order.map((item) => (
                     <BasketItem
                        key={item.name}
                        removeFromOrder={removeFromOrder}
                        {...item}
                     />
                  ))}
                  <Divider />
                  <ListItem>
                     <Typography sx={{ fontWeight: 700 }}>
                        Full price:{' '}
                        {order.reduce((acc, item) => {
                           return acc + item.price * item.quantity;
                        }, 0)}{' '}
                        UAH.
                     </Typography>
                  </ListItem>
               </>
            )}
         </List>
      </Drawer>
   );
}

export default Basket;
