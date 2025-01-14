import { FC, HTMLAttributes } from "react";
import { Button, Container, Icon, Image } from "semantic-ui-react";

interface TakeWtonProps extends HTMLAttributes<HTMLDivElement> {
  resetStep: () => void;
  txHash?: string;
}

const TakeWton: FC<TakeWtonProps> = ({ children, resetStep, txHash }) => {
  return (
    <Container className="p-8 border border-1 rounded text-center">
      <Icon name="check" color="green" circular size="huge" />

      <h2>Transaction completed</h2>
      <Button onClick={resetStep} primary>
        Make another transaction
      </Button>
      <a
        className="block mt-2 align-middle"
        href={`https://sepolia.etherscan.io/tx/${txHash}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://testnet.bscscan.com/images/favicon.ico"
          className="inline w-5"
          alt="bscscan"
        />{" "}
        Check tx in Etherscan
      </a>
    </Container>
  );
};

export default TakeWton;
