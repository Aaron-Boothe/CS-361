#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char const *argv[])
{
	// Main loop
	while(1) {
		char *inputPtr, input[100];
    	int choice;

    	int prngVal = 0;

		printf("Type 1 to get a random picture path, type 0 to exit: ");
		fgets(input, sizeof(input), stdin);
		choice = strtol(input, &inputPtr, 10);

    	if (choice == 0)
    	{
    		return 0;
    	}

    	// Write 'run' to file
    	FILE * fp;
		fp = fopen("prng-service.txt", "w");
		fprintf(fp, "run");
		fclose(fp);

    	// PRNG Loop
		while(1) {
			fp = fopen("prng-service.txt", "r");
			fgets(input, sizeof(input), fp);
			prngVal = atoi(input);
			fclose(fp);

			// If read input from file is a not a number sleep and check again later
			// 		if a number, assume it's the PRNG number, break, and continue
			if (prngVal != 0)
			{
				break;
			}
			else
			{
				sleep(3);
			}
		}

		// Writes PRNG number to file
		fp = fopen("image-service.txt", "w");
		fprintf(fp, "%d", prngVal);
		fclose(fp);

		// IMGSRV loop
		while(1) {
			fp = fopen("image-service.txt", "r");
			fgets(input, sizeof(input), fp);
			prngVal = atoi(input);
			fclose(fp);

			// If read input from file is a number, sleep and check again later
			// 		if not a number, assume it's a path, break, and continue
			if (prngVal != 0)
			{
				sleep(3);
			}
			else
			{
				break;
			}
		}

		// Prints read image path
		printf("%s\n\n", input);		
	}
	return 0;
}