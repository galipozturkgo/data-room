'use client';

import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton as HeadlessDisclosureButton,
  DisclosurePanel as HeadlessDisclosurePanel,
} from '@headlessui/react';

export const DisclosureBase = Object.assign(HeadlessDisclosure, {
  Button: HeadlessDisclosureButton,
  Panel: HeadlessDisclosurePanel,
});
