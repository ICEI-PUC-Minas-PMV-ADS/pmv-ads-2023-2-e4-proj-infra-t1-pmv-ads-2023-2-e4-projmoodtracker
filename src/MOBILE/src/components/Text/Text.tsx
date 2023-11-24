import { TextProps as TextPropsNative } from "react-native/types";
import { ContainerText } from "./style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextProps extends TextPropsNative {
    color?: string,
    type?: string,

}


const Text = ({ color, type, ...props }: TextProps) => {
    
    const handleSize = useMemo(() => {
        switch(type) {
            case textTypes.TITLE:
                return '32px';
            default:
                return '16px';
        }
    }, [type]);

  return <ContainerText style={{ fontSize: 20, fontWeight: 'bold'}} color={color} size={handleSize} {...props }/>;
};

export default Text;
