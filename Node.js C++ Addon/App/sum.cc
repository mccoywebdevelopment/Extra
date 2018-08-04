#include <node.h>

void Sum(const v8::FunctionCallbackInfo<v8::Value>& args){
  v8::Isolate* isolate = args.GetIsolate();


  double a=3.14,b=2.72;
  for(int i=0;i<100000000;i++){
    a+=b;
  }
  a=3;
  auto total=v8::Number::New(isolate,a);

  args.GetReturnValue().Set(total);
}

void Initialize(v8::Local<v8::Object>exports){
  NODE_SET_METHOD(exports,"sum",Sum);
}

NODE_MODULE(addon,Initialize)
