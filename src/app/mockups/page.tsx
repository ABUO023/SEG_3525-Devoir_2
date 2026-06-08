import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        'https://www.figma.com/design/dDYRUaw96GKKY7U83yMDcJ/Untitled?node-id=0-1&t=2fttwBZD471Y3f3M-1',
      statusCode: 307,
    },
  }
}

export default function Mockups() {
  return null
}