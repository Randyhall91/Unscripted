export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:1337' : ''
export const useSockets = false
export const domain = ''
export const clientId = ''
export const audience = ''
export const bearer = 'd2fb1bbe19fe6c2a047d729764e6baa584207b790ea5212e272c2ffbf19797cccc7bc1eb9c769548cc48f485dbabbc8bc8e39362b417e24f1e7d2b4dc625fa1c5a598ea3931b3ae397be020ba8c06ad26cbd380906bea9882793837ab9ebc66aea1cc14fbf71dd13bfc55874b9a719e8d87f3d1c974ef0aa5e76f3d40d652507'