import '@testing-library/jest-dom'
import React from 'react'

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) =>
    React.createElement('a', { href, ...rest }, children),
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: {
    src: string | { src: string }
    alt: string
    fill?: boolean
    priority?: boolean
  }) => {
    const { src, alt, fill: _fill, priority: _priority, ...rest } = props
    void _fill
    void _priority
    const resolvedSrc = typeof src === 'string' ? src : (src?.src ?? '')
    return React.createElement('img', { src: resolvedSrc, alt, ...rest })
  },
}))

jest.mock(
  'lucide-react',
  () =>
    new Proxy(
      { __esModule: true },
      {
        get: (target, prop) => {
          if (typeof prop === 'string' && prop in target) {
            return (target as Record<string, unknown>)[prop]
          }
          return (props: React.SVGProps<SVGSVGElement>) =>
            React.createElement('svg', { ...props, 'data-icon': String(prop) })
        },
      },
    ),
)
