import {Button, Checkbox, FormControlLabel, Grid, Link, makeStyles, TextField} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";
import React from "react";
import {AuthForm} from "../AuthForm";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {signIn, SignInOptions} from "../../session/signIn";

const useStyles = makeStyles((theme) => ({
    control: {
        marginBottom: '1em',
    },
    form: {
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))


export function SignIn() {
    const { control, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (form: SignInOptions) => {
        try {
            await signIn(form)(dispatch);
            history.push('/');
        } catch (e) {
            
        }
        
    };

    const classes = useStyles();

    return (
        <AuthForm title="Sign In">
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                <Controller name="email"
                            control={control}
                            render={({ field }) => <TextField {...field}
                                                              variant="outlined"
                                                              margin="normal"
                                                              required
                                                              fullWidth
                                                              label="Email Address"
                                                              autoComplete="email"
                                                              autoFocus
                            />}
                />
                <Controller name="password"
                            control={control}
                            render={({ field }) => <TextField {...field}
                                                              variant="outlined"
                                                              margin="normal"
                                                              required
                                                              fullWidth
                                                              label="Password"
                                                              type="password"
                                                              autoComplete="current-password"
                            />}
                />
                <Controller name="rememberMe"
                            control={control}
                            render={({ field }) => <FormControlLabel
                                control={<Checkbox { ...field } value="remember" color="primary" />}
                                label="Remember me"
                            />}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthForm>
    )
}
