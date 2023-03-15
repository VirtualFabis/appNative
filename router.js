import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import DetailProduct from './components/DetailProduct';
import Productos from './components/Productos';
const Stack = createBottomTabNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Prodcutos"
            component={Productos}
          />
           <Stack.Screen
            name="Carrito"
            component={DetailProduct}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default MyStack;