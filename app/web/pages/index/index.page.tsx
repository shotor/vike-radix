import { Heading, Button, Code, Flex } from '@radix-ui/themes'

const HomePage = () => {
  return (
    <div>
      <Flex direction="column" gap="5">
        <Heading as="h1">Radix Heading</Heading>
        <Button>Radix Button</Button>
        <Code>
          radix code <br />
          console.log()
        </Code>
      </Flex>
    </div>
  )
}

export const Page = HomePage
