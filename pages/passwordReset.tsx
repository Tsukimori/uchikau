

const PasswordReset = () => {
  return (
    <div className=" w-80 mx-auto mt-60 text-xs space-y-2">
      <input type="text" className=" border border-gray-300 w-60 h-8" />
      <p className=" text-xs">ご登録のメールアドレスをご入力ください。</p>
      <button className=" bg-sky-500 text-white py-2 px-6">送信</button>
    </div>

  )
}

export default PasswordReset