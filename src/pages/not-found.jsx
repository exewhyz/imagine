import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center p-4">
      <Empty>
        <EmptyContent>
          <EmptyHeader>
            <EmptyTitle>404 - Page Not Found</EmptyTitle>
            <EmptyDescription>
              The page you're looking for doesn't exist or has been moved.
            </EmptyDescription>
          </EmptyHeader>
          <Button onClick={() => navigate('/')}>
            Go Back Home
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export default NotFound