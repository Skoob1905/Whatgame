'use server'
import prisma from 'lib/prisma'

export async function submit(formData: FormData) {
	prisma.game.update({
		where: {
			id: gameId,
		},
		data: formData,
	})
}
