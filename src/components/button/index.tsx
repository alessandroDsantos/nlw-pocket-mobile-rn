import { Text, TouchableOpacity, TouchableOpacityProps, TextProps, ActivityIndicator} from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

import { s } from "./styles";
import {colors} from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
    isLoadind?: boolean
}

function Button({children, style, isLoadind = false, ...rest}: ButtonProps){
        return (
            <TouchableOpacity 
                style={[s.container, style]} 
                activeOpacity={0.8}
                disabled={isLoadind}
                {...rest}
                >
                {
                    isLoadind ? <ActivityIndicator size="small" color={colors.gray[100]}/> : children
                }
            </TouchableOpacity>
        )
        
    }

function Title({children}: TextProps){
    return <Text style={s.title} >{children}</Text>
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps){
    return <Icon size={24} color={colors.gray[100]}/>
}

Button.Title = Title;
Button.Icon = Icon;

export { Button }