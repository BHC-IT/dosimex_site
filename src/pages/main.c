#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

char *func() {
	char c = 'a';

	printf("&c = %p\n", &c);

	char *str = &c;

	return str;
}

int main() {
	char base;
	char c;

	printf("%p\n", &base);
	printf("%p\n", &c);

	printf("%ld\n", (long)&c - (long)&base);

	char *str = func();
	printf("&str = %ld\n", (long)&str - (long)&base);
	printf("str = %ld\n", (long)str - (long)&base);

	char c2;
	printf("&c2 = %ld\n", (long)&c2 - (long)&base);

	printf("c = %c\n", str[0]);

	str[0] = 'b';
	printf("c = %c\n", str[0]);

	return 0;
}
