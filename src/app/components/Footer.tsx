'use client';

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      bg="gray.50"
      color="gray.700"
    >
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8}>
          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Company
            </Text>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Services
            </Text>
            <Link href="#birth-chart">Birth Chart Analysis</Link>
            <Link href="#horoscope">Horoscope Reading</Link>
            <Link href="#matchmaking">Matchmaking</Link>
            <Link href="#career">Career Guidance</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Legal
            </Text>
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#terms">Terms of Service</Link>
            <Link href="#refund">Refund Policy</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Follow Us
            </Text>
            <Stack direction="row" gap={6}>
              <Link href="#">
                <Icon as={FaFacebook} w={6} h={6} />
              </Link>
              <Link href="#">
                <Icon as={FaTwitter} w={6} h={6} />
              </Link>
              <Link href="#">
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>
              <Link href="#">
                <Icon as={FaYoutube} w={6} h={6} />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor="gray.200"
      >
        <Container
          as={Stack}
          maxW="container.xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
        >
          <Text>© 2024 AstroGuide. All rights reserved</Text>
          <Stack direction="row" gap={6}>
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#terms">Terms of Service</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 