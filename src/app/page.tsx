'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaStar, FaChartLine, FaHandshake } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';

const MotionBox = motion(Box);

const services = [
  {
    title: 'Birth Chart Analysis',
    description: 'Detailed analysis of your birth chart to understand your life path and potential.',
    icon: GiCrystalBall,
  },
  {
    title: 'Horoscope Reading',
    description: 'Daily, weekly, and monthly horoscope predictions for your zodiac sign.',
    icon: FaStar,
  },
  {
    title: 'Matchmaking',
    description: 'Compatibility analysis for marriage and relationships.',
    icon: FaHandshake,
  },
  {
    title: 'Career Guidance',
    description: 'Astrological guidance for career choices and professional growth.',
    icon: FaChartLine,
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The most accurate predictions I have ever received. Changed my perspective on life.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    text: 'The career guidance helped me make the right decision at a crucial point in my life.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    text: 'The matchmaking service was spot on! Found my perfect life partner.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-b, brand.500, brand.700)"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <VStack align="start" gap={6} maxW="600px">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="bold"
                  lineHeight="1.2"
                >
                  Unlock the Mysteries of Your Future
                </Heading>
                <Text fontSize="xl" mt={4}>
                  Personalized astrology readings, horoscope analysis, and guidance from a trusted astrologer.
                </Text>
                <Button
                  colorScheme="yellow"
                  size="lg"
                  mt={6}
                >
                  Book Your Consultation
                </Button>
              </MotionBox>
            </VStack>
            <Box
              position="relative"
              w={{ base: '100%', md: '40%' }}
              h="400px"
              bg="rgba(255,255,255,0.1)"
              borderRadius="xl"
              overflow="hidden"
            >
              <Icon
                as={GiCrystalBall}
                w="full"
                h="full"
                color="white"
                opacity={0.2}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxW="container.xl" py={20}>
        <VStack gap={8} align="center">
          <Heading>Our Services</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
            {services.map((service, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VStack
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="lg"
                  gap={4}
                  align="start"
                  h="full"
                >
                  <Icon as={service.icon} w={10} h={10} color="brand.500" />
                  <Heading size="md">{service.title}</Heading>
                  <Text color="gray.600">{service.description}</Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Testimonials Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.xl">
          <VStack gap={8} align="center">
            <Heading>What Our Clients Say</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
              {testimonials.map((testimonial, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <VStack
                    p={6}
                    bg="white"
                    borderRadius="xl"
                    boxShadow="lg"
                    gap={4}
                    align="start"
                    h="full"
                  >
                    <HStack>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} as={FaStar} color="yellow.400" />
                      ))}
                    </HStack>
                    <Text color="gray.600">{testimonial.text}</Text>
                    <Text fontWeight="bold">{testimonial.name}</Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
