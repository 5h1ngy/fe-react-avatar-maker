import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Separator, Text, Flex, IconButton } from "@chakra-ui/react"
import { FcLike, FcVideoCall, FcNoVideo, FcViewDetails } from "react-icons/fc";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";

import { STATUS, STATUS_REFERENCE } from "@/store/containerMyList";
import { WithRouterProps } from "@/hocs/withRouter";
import Card from "@/components/Card"

import { Bind } from "./container"

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ router, state, actions }) => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const toWatch = state.anime.occurrences.filter(occurrence =>
        state.references.find(ref => ref.id === occurrence.id && ref.status === STATUS_REFERENCE.TO_WATCH)
    )

    const watching = state.anime.occurrences.filter(occurrence =>
        state.references.find(ref => ref.id === occurrence.id && ref.status === STATUS_REFERENCE.WATCHING)
    )

    const complete = state.anime.occurrences.filter(occurrence =>
        state.references.find(ref => ref.id === occurrence.id && ref.status === STATUS_REFERENCE.COMPLETE)
    )

    function onGoToDetails(id: string) {
        router.navigate(`/details/${id}`)
    }

    function remove(id: string) {
        actions.removeReference({ id })
    }

    const Actions: React.FC<{ id: string, status: STATUS_REFERENCE }> = ({ id, status }) => <Flex gap="2" wrap='wrap'>

        <IconButton onClick={() => remove(id)} aria-label="Details" variant="surface" size="xs">
            <HiOutlineArchiveBoxXMark />
        </IconButton>

        <IconButton onClick={() => onGoToDetails(id)} aria-label="Details" variant="surface" size="xs">
            <FcViewDetails />
        </IconButton>

        {(status === STATUS_REFERENCE.TO_WATCH) &&
            <IconButton aria-label="Add to my list" variant="ghost" size="xs"
                onClick={() => actions.updateStatus({ id, status: STATUS_REFERENCE.WATCHING })}
            >
                <FcVideoCall />
            </IconButton>
        }

        {status === STATUS_REFERENCE.WATCHING &&
            <IconButton aria-label="Add to my list" variant="ghost" size="xs"
                onClick={() => actions.updateStatus({ id, status: STATUS_REFERENCE.COMPLETE })}
            >
                <FcNoVideo />
            </IconButton>
        }

        {status === STATUS_REFERENCE.COMPLETE &&
            <IconButton aria-label="Add to my list" variant="ghost" size="xs" onClick={() => {
                actions.updateStatus({ id, status: STATUS_REFERENCE.TO_WATCH })
            }}>
                <FcLike />
            </IconButton>
        }

    </Flex>

    const Cards: React.FC<{ status: STATUS_REFERENCE, occurrences: typeof state.anime.occurrences }> = ({ occurrences, status }) =>
        <Flex wrap={'wrap'} gap='2rem' align="stretch" justify={{ base: "center", md: 'start', lg: 'start', xl: 'start', "2xl": 'start' }}>
            {occurrences.map((occurrence, index) => <div key={crypto.randomUUID()} ref={(element) => (cardsRef.current[index] = element!)}>
                <Card
                    id={occurrence.id}
                    thumbnail={occurrence.image.thumbnail}
                    title={occurrence.title}
                    type={occurrence.type}
                    yearStart={occurrence.year_start}
                    season={occurrence.season}
                    actions={<Actions id={occurrence.id} status={status} />}
                />
            </div>)}
        </Flex>

    useEffect(() => {
        actions.doGetReferences();
    }, []);

    useEffect(() => {

        // Animazione GSAP per le card
        cardsRef.current.forEach((card) => {
            const fromVars = {
                opacity: 0, // Inizia trasparente
                y: 100,     // Parte 100px sotto
            };

            const toVars = {
                opacity: 1, // Diventa visibile
                y: 0,       // Torna alla posizione originale
                duration: 0.8, // Durata dell'animazione
                ease: "bounce.out", // Effetto rimbalzo
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%", // Inizia quando il top della card raggiunge l'85% del viewport
                    toggleActions: "play none none none", // L'animazione si riproduce solo in avanti
                },
            };

            return gsap.fromTo(card, fromVars, toVars);
        });

    }, [state.anime.occurrences]);

    return <>
        {state.anime.status === STATUS.LOADING
            ? <Text>Loading...</Text>
            : <>

                <Text textStyle="2xl" textAlign={"end"}>To Watch</Text>
                <Separator />
                <Cards status={STATUS_REFERENCE.TO_WATCH} occurrences={toWatch} />

                <Text textStyle="2xl" textAlign={"end"}>Watching</Text>
                <Separator />
                <Cards status={STATUS_REFERENCE.WATCHING} occurrences={watching} />

                <Text textStyle="2xl" textAlign={"end"}>Complete</Text>
                <Separator />
                <Cards status={STATUS_REFERENCE.COMPLETE} occurrences={complete} />

            </>
        }
    </>
}

export default Component;