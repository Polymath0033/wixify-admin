const useNaira = () => {
  const money_ = (money) => {
    return Number(money).toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };
  return {
    amountNaira: money_,
  };
};
export default useNaira;
