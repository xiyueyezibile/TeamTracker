import { Button, Flex } from '@chakra-ui/react';
import { InputFile } from '..';

interface Props {
  children: React.ReactNode;
}

export default function Header(props: Props) {
  const { children } = props;
  return (
    <Flex
      w={'100vw'}
      bg={'#fff'}
      position={'fixed'}
      zIndex={9999}
      justifyContent={'space-between'}
      alignContent={'center'}
    >
      {children}
    </Flex>
  );
}
