import {View, Text} from "react-native";

import { Welcome } from "@/components/welcome";

import { Steps } from "@/components/steps";

export default function Index(){
    return(
        <View style={{
            flex: 1,
            padding: 35,
        }}>
            <Welcome/>
            <Steps />
        </View>
    );
}