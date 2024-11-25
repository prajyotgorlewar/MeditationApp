import { Slot, Stack } from "expo-router";

// Import your global CSS file
import "../global.css";

const _layout=()=>{
     <Stack 
     screenOptions={{
        headerShown:false
     }}>
        <Stack.Screen name="meditate" option={{
            presentation:"fullScreenModal"
        }}
        />
     </Stack>

}

export default Slot;