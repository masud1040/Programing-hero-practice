interface response<T> {
  data: T;
  status: number;
}
const response1: response<string> = {
  data: "Payment successful",
  status: 200,
};

const response2: response<boolean> = {
  data: true,
  status: 200,
};   
