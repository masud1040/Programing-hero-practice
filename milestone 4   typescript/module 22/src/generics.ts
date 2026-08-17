function identity<T>(arg: T){
    return arg;
}

identity<string>("hello");
identity<number>(10);
identity<boolean>(true);