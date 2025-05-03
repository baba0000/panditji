'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const Links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="white"
      px={4}
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? '×' : '☰'}
        </IconButton>
        <HStack gap={8} alignItems="center">
          <Box>
            <Icon as={FaStar} w={8} h={8} color="brand.500" />
          </Box>
          <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button variant="ghost" colorScheme="brand">
                  {link.name}
                </Button>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button colorScheme="brand" variant="solid">
            Book Now
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" gap={4}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button variant="ghost" colorScheme="brand" w="full">
                  {link.name}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
} 