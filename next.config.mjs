/** @type {import('next').NextConfig} */

import million from "million/compiler"
const nextConfig = {}

export default million.next(nextConfig, {
    auto: {
        rsc: true
    }
})
