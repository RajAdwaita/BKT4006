import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '2xuwuzws',
    dataset: 'production',
    apiVersion: '2021-03-25', // use a UTC date string
    token: 'skXnXqO8KvtFasUnWzyLVhCMjGoJTlWo5fKfqS15PsqJpTYqy9FluVuzyQ5zvuMVOznsWqRzn65LLWfjIRIHl9ckal8FuKGL5Z23xGcURav6nQF4PGfXNhyh1m3damiWLSqeo6weYddWHZRcq3X3YvYL9JwdO8eWKIIOGO6t9ybhNuYfFEHC', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data

})