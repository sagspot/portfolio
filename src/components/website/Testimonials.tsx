import {
  Box,
  Circle,
  Flex,
  Heading,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimonial } from '../../types';

const Testimonials = ({ data }: { data: Testimonial[] }) => {
  return (
    <Box as="section" id="testimonials" px={[6, 8, 16]} py={[4, 6, 16]}>
      <Heading as="h2" size="md" textAlign="center" mb={10}>
        Testimonials
      </Heading>

      <Swiper
        tag="section"
        modules={[Autoplay]}
        slidesPerView={1}
        speed={600}
        loop={true}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <Flex
              direction="column"
              align="center"
              textAlign="center"
              rounded="base"
            >
              <Circle
                size={20}
                mb="-12"
                position="relative"
                overflow="hidden"
                border="2px solid"
                borderColor={mode('red.50', 'brand.200')}
                bg={mode('red.50', 'brand.200')}
              >
                <Image
                  src={testimonial.avatar}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Circle>

              <Box pt={16} pb={8} bg={mode('red.100', 'blue.700')}>
                <Heading as="h3" size="sm">
                  {testimonial.name}
                </Heading>

                <Text width={['90%', null, '80%']} mx="auto">
                  {testimonial.text}
                </Text>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
