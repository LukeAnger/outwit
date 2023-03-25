type ConnectionProps = {
  isConnected: boolean
}

export const ConnectionState = ({ isConnected }: ConnectionProps) => {
  return <p>State: { '' + isConnected }</p>;
}