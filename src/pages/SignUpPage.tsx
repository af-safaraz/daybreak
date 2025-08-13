import SignUpForm from "@/components/forms/SignUpForm";
import Background from "@/components/layouts/Background";
import daybreakLogo from "@/assets/DaybreakLogo.svg";

const SignUpPage = () => {
  return (
    <>
      <Background />
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <div className="text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <img src={daybreakLogo} alt="" />
            </div>
            Daybreak
          </a>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
